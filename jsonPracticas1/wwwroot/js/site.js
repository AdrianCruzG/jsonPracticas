$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos/",
        dataType: "json",
        success: function (data) {

            $.each(data, function (i, item) {
                var row = "<tr>" +
                    "<td>" + item.albumid + "</td>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.title + "</td>" +
                    "<td> <img src='" + item.url + "'/></td>" +
                    "<td> <img src='" + item.thumbnailurl + "'/></td>" +
                    "</tr>";
                $("#tabla>tbody").append(row);
            });
        }, //End of AJAX Success function  
    });
}); 
