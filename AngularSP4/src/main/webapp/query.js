$(document).ready(function() {
   getMembers();
    function getMembers() {
        $('#members').html("");
        $.ajax({
            url: 'api/member',
            type: 'GET',
            dataType: "json",
            success: function (members) {
                members.forEach(function(member){
                  var output = "";
                  output += typeof  member.id !== "undefined" ? '<td>' + member.id + '</td>' : '<td>-</td>';
                  output += typeof member.age !== "undefined" ? '<td>' + member.age + '</td>' : '<td>-</td>';
                  output += typeof member.eyeColor !== "undefined" ? '<td>' + member.eyeColor + '</td>' : '<td>-</td>';
                  output += typeof member.email !== "undefined" ? '<td>' + member.email + '</td>' : '<td>-</td>';
                  output += typeof member.name !== "undefined" ? '<td>' + member.name + '</td>' : '<td>-</td>';
                  $('#members').append('<tr>' + output + '</tr>');
                });
            },
            error: function (res) {
                console.log("fail");
            }
        });
    }
});