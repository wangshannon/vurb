var url = "https://gist.githubusercontent.com/helloandrewpark/0a407d7c681b833d6b49/raw/5f3936dd524d32ed03953f616e19740bba920bcd/gistfile1.js";

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var items = JSON.parse(xmlhttp.responseText);
        var output = '<ul>';
        //Splitting up each card into respective categories
        //Currently skipping last Pachelbel's Canon (can't figure out why)
        for (var key in items) {
        	for (var each in key) {
                var image = items[key][each].imageURL; //Save the imageURL for easy access
                if (items[key][each].type == 'place') {
                    output += '<li>' + items[key][each].title + '<br>' + 
                    items[key][each].placeCategory + '<br>' + 
                    '<img src ="' + image + '">' + '</li>';
                }
                else if (items[key][each].type == 'movie') {
                    image = items[key][each].movieExtraImageURL; //Replace image with extra image
                    output += '<li>' + items[key][each].title + '<br>' + 
                    '<img src ="' + image + '">' + '</li>';
                }
                else if (items[key][each].type == 'music') {
                    var link = items[key][each].musicVideoURL; //Save musicVideoURL for link/name to click
                    output += '<li>' + items[key][each].title + '<br>' + 
                    '<a href = "' + link + '">' + link +'</a>' + '<br>' +
                    '<img src ="' + image + '">' + '</li>';
                }
      		}
        }
        output += '</ul>'
        document.getElementById('data').innerHTML = output;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
