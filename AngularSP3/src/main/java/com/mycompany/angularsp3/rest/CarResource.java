package com.mycompany.angularsp3.rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mycompany.angularsp3.entities.Car;
import java.util.HashMap;
import java.util.Map;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author lucasmfredmark
 */
@Path("car")
public class CarResource {

    private static Map<Integer,Car> carList;
    private static int nextCarId = 1;

    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CarResource
     */
    public CarResource() {
        if (carList == null) {
            carList = new HashMap() {
                {
                    put(1, new Car(nextCarId++, 1997, "15. apr. 1999", "Ford", "E350", "ac, abs, moon", 3000));
                    put(2, new Car(nextCarId++, 1999, "12. apr. 1996", "Chevy", "Venture", "None", 4900));
                    put(3, new Car(nextCarId++, 2000, "22. jan. 2000", "Chevy", "Venture", "None", 5000));
                    put(4, new Car(nextCarId++, 1996, "15. apr. 2002", "Jeep", "Grand Cherokee", "Moon roof", 4799));
                }
            };
        }
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getCars() {
        return GSON.toJson(carList.values().toArray());
    }

    @GET
    @Path("{carId:\\d+}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getCarById(@PathParam("carId") int carId) {
        Car car = carList.get(carId);
        
        return GSON.toJson(car);
    }

    @DELETE
    @Path("{carId:\\d+}")
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteCar(@PathParam("carId") int carId) {
        Car car = carList.remove(carId);
        
        return GSON.toJson(car);
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public String addCar(String jsonCar) {
        Car car = GSON.fromJson(jsonCar, Car.class);
        car.setId(nextCarId++);
        carList.put(nextCarId, car);
        
        return GSON.toJson(car);
    }

    @POST
    @Path("{carId:\\d+}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String editCar(@PathParam("carId") int carId, String jsonCar) {
        Car car = GSON.fromJson(jsonCar, Car.class);
        car.setId(carId);
        carList.replace(carId, car);
        
        return GSON.toJson(carList.get(carId));
    }
}
