// $('i:gt(1)').addClass('fa-3x ');

// $('.col1').mouseover(function(){
// 	$(this).css("color", "white");
// });
// $('.current').css("color", "white");

// $('.col1').mouseout(function() {
// 		$(this).css("color", "#707070");
// 	});

let col1 = $('.col1');
let col2 = $('.col2');
let col3 = $('.col3');

col1.click(function(){
	$('.col2, .col3').removeClass('current');
	$(this).addClass('current');
	let output = `
		<div class="container" style ="height: 100vh;">
			<div class="jumbotron">
			  <div class="row">
			    <div class="col-sm">
			      <p class="lead"><span style="font-size:1.65em; ">If you decide Netflix isn't for you - no problem. No commitment. Cancel online at any time. </span></p>
			  	  <br>
			  	  <div style="text-align:left;">
			  	  <button type="button" class="btn btn-danger" id = "button1">TRY 30 DAYS FREE</button>
			  	  </div>
			    </div>
			    <div class="col-sm" style = "margin-top: -60px">
			      <img class="img1" src="netflix04.png">
			    </div>
			  </div>
			</div>
		</div>`;
	$('#output').html(output);
});

col2.click(function(){
	$('.col1, .col3').removeClass('current');
	$(this).addClass('current');
	let output = `
	<div class="container" >
			<div class ="jumbotron" >
			  <div class="row">
			    <div class="col-8">Watch TV programmes and films at any time, anywhere - personalised for you.</div>
			    <div class="col-4"><button type="button" class="btn btn-danger" id = "button1">TRY 30 DAYS FREE</button></div>
			  </div> <br><br><br>

			  <div class="row">
			    <div class="col">
			    	<div class = "col">
			    		<img src = "netflix05.png">
			    	</div>
			    	<div class = "col">
			    		Watch on your TV<br>
			    		Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
			    	</div>
			    </div>
			    <div class="col">
				    <div class = "col">
				    	<img src = "netflix06.png">
				    </div>
				    <div class = "col">
				    	Watch instantly or download for later.<br>Available on phone and tablet, wherever you go.
				    </div>
			    </div>
			    <div class="col">
			    	<div class = "col">
			    		<img src = "netflix07.png">
				    </div>
				    <div class = "col">
				    	Use any computer<br>Watch on Netflix.com.	
					</div>
			  </div>
			</div>
		</div>
	</div>
	`;
	$('#output').html(output);
});
col3.click(function(){
	$('.col1, .col2').removeClass('current');
	$(this).addClass('current');
	let output = `
	<div class='container'>
	<div class = "jumbotron"> 
		<span style ="font-size: 1.5em; color: white;">Choose one plan and watch everything on Netflix.</span>
		<button type="button" class="btn btn-danger ml-5" id = "button1">TRY 30 DAYS FREE</button><br><br>
		<table class="table table-borderless" style = "width: 1000px; margin: auto;">
		  <thead>
		    <tr>
		      <th scope="col"></th>
		      <th scope="col">MOBILE</th>
		      <th scope="col">BASIC</th>
		      <th scope="col">STANDARD</th>
		      <th scope="col">PREMIUM</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">Monthly price after free month ends on 27/8/19</th>
		      <td><i class="fas fa-rupee-sign"></i> 199</td>
		      <td><i class="fas fa-rupee-sign"></i> 499</td>
		      <td><i class="fas fa-rupee-sign"></i> 649</td>
		      <td><i class="fas fa-rupee-sign"></i> 799</td>
		    </tr>
		    <tr>
		      <th scope="row">HD available</th>
		      <td><i class="fas fa-times"></td>
		      <td><i class="fas fa-times"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		    </tr>
		    <tr>
		      <th scope="row">Ultra HD available</th>
		      <td><i class="fas fa-times"></td>
		      <td><i class="fas fa-times"></td>
		      <td><i class="fas fa-times"></td>
		      <td><i class="fas fa-check"></td>
		    </tr>
		    <tr>
		      <th scope="row">Watch on your laptop and TV</th>
		      <td><i class="fas fa-times"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		    </tr>
		    <tr>
		      <th scope="row">Watch on your mobile phone and tablet</th>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		    </tr>
		    <tr>
		      <th scope="row">Screens you can watch on at the same time</th>
		      <td>1</td>
		      <td>1</td>
		      <td>2</td>
		      <td>4</td>
		    </tr>
		    <tr>
		      <th scope="row">Unlimited films and TV programmes</th>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		    </tr>
		    <tr>
		      <th scope="row">Cancel at any time</th>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		    </tr>
		    <tr>
		      <th scope="row">First month free</th>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		      <td><i class="fas fa-check"></td>
		    </tr>
		  </tbody>
		</table>
		</div>
	</div>
	`;
	$('button .row:even').css("background-color","#282928");
	$('#output').html(output);
});