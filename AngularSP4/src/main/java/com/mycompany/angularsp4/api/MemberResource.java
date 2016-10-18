package com.mycompany.angularsp4.api;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.mycompany.angularsp4.model.DataFactory;

/**
 * REST Web Service
 *
 * @author lucasmfredmark
 */
@Path("member")
public class MemberResource {

    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of MemberResource
     */
    public MemberResource() {
    }

    /**
     * Retrieves representation of an instance of api.MemberResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        DataFactory df = new DataFactory();
        
        return df.getMembersAsJson();
    }
}
