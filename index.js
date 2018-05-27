$(document).ready(function(){
	$.ajax({
		url: 'http://starlord.hackerearth.com/beercraft',
		datatype: 'json',
		crossDomain: true,
		method: "GET",
		success: function(response){
			$.each(response, function(){
				$('.beer-card-row').append('<div class="col-xs-12 col-sm-6 col-md-4 beer-card-div"><div class="beer-card"><div class="row"><div class="col-xs-4 beer-img-div"><img src="beer.png" class="beer-img"></div><div class="col-xs-8 beer-info"><p class="beer-name">'+this.name+'</p><p class="beer-style">'+this.style+'</p><p class="beer-abv">abv : '+this.abv+'</p><p class="beer-ibu">ibu : '+this.ibu+'</p><p class="beer-ounce">'+this.ounces+' ounces</p><p class="beer-id">product id : '+this.id+'</p></div></div></div></div>');
			});
			if(response){
				$('.loader').hide();
			}
			$('#searchBeer').keyup(function() {
				$('.list-text').text('Search Results :');
				var value = $(this).val().toLowerCase();
				if (!value) {
					$('.list-text').text('List of Beers');
				}
				$('.beer-card-div').filter(function() {
					$(this).toggle($(this).find('.beer-name, .beer-style').text().toLowerCase().indexOf(value) > -1);
				});
			});

			$('.sort-select').change(function(){
				if ($(this).val() == 'asce') {
					response.sort(function(firstEle,secondEle){
						return firstEle.abv - secondEle.abv;
					});
					$('.beer-card-row').empty();
					$.each(response, function(){
						$('.beer-card-row').append('<div class="col-xs-12 col-sm-6 col-md-4 beer-card-div"><div class="beer-card"><div class="row"><div class="col-xs-4 beer-img-div"><img src="beer.png" class="beer-img"></div><div class="col-xs-8 beer-info"><p class="beer-name">'+this.name+'</p><p class="beer-style">'+this.style+'</p><p class="beer-abv">abv : '+this.abv+'</p><p class="beer-ibu">ibu : '+this.ibu+'</p><p class="beer-ounce">'+this.ounces+' ounces</p><p class="beer-id">product id : '+this.id+'</p></div></div></div></div>');
					});
				}
				else if ($(this).val() == 'desc') {
					response.sort(function(firstEle,secondEle){
						return secondEle.abv - firstEle.abv;
					});
					$('.beer-card-row').empty();
					$.each(response, function(){
						$('.beer-card-row').append('<div class="col-xs-12 col-sm-6 col-md-4 beer-card-div"><div class="beer-card"><div class="row"><div class="col-xs-4 beer-img-div"><img src="beer.png" class="beer-img"></div><div class="col-xs-8 beer-info"><p class="beer-name">'+this.name+'</p><p class="beer-style">'+this.style+'</p><p class="beer-abv">abv : '+this.abv+'</p><p class="beer-ibu">ibu : '+this.abv+'</p><p class="beer-ounce">'+this.ounces+' ounces</p><p class="beer-id">product id : '+this.id+'</p></div></div></div></div>');
					});
				}
			});
		}
	});
});