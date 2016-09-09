/*Setup variable for clicks*/
var clicks = 0

$(document).ready(function() {

	$('#start-over').on('click', function() {
		console.log('Clicked!');
		$('#body').find('h1').text('');
		$('#body').find('p').text("It is O Player's turn.");
		$('#body > div').removeClass('Xclick');
		$('#body > div').removeClass('Oclick');
		$('#body > div').removeClass('nonclickable');
		$('#body > div').on('click');
		clicks = 0;
	});

	$('#body > div').click(function(e) {
		e.stopPropagation();
		clicks++;

		if(clicks % 2 == 0) {
			console.log('X');
			console.log("It is O player's turn.");
			$('#body').find('p').text("It is O player's turn.");
			$(this).find('h1').text('X');
			$(this).addClass('Xclick');
			isWinner();
		}
		else {
			console.log('O');
			console.log("It is X player's turn.");
			$('#body').find('p').text("It is X player's turn.");
			$(this).find('h1').text('O');
			$(this).addClass('Oclick');
			isWinner();
		}

		$(this).off('click');
		
		/*Example code for doing it via CSS*/
		$(this).removeClass('clickable');
		$(this).addClass('nonclickable');
	

		console.log(clicks);
	});

	$('#body').on('click', '.nonclickable', function() {
		console.log('You cannot click here');
	});

});

function isWinner() {
		if ($('.square1').hasClass('Oclick') && $('.square2').hasClass('Oclick') && $('.square3').hasClass('Oclick') ||
			$('.square4').hasClass('Oclick') && $('.square5').hasClass('Oclick') && $('.square6').hasClass('Oclick') ||
			$('.square7').hasClass('Oclick') && $('.square8').hasClass('Oclick') && $('.square9').hasClass('Oclick') ||
			$('.square1').hasClass('Oclick') && $('.square4').hasClass('Oclick') && $('.square7').hasClass('Oclick') ||
			$('.square2').hasClass('Oclick') && $('.square5').hasClass('Oclick') && $('.square8').hasClass('Oclick') ||
			$('.square3').hasClass('Oclick') && $('.square6').hasClass('Oclick') && $('.square9').hasClass('Oclick') ||
			$('.square1').hasClass('Oclick') && $('.square5').hasClass('Oclick') && $('.square9').hasClass('Oclick') ||
			$('.square3').hasClass('Oclick') && $('.square5').hasClass('Oclick') && $('.square7').hasClass('Oclick')) {
			console.log('Tic Tac Toe! O Player wins!');
			$('#body').find('p').text("TIC TAC TOE! O PLAYER WINS!");
		}
		else if ($('.square1').hasClass('Xclick') && $('.square2').hasClass('Xclick') && $('.square3').hasClass('Xclick') ||
			$('.square4').hasClass('Xclick') && $('.square5').hasClass('Xclick') && $('.square6').hasClass('Xclick') ||
			$('.square7').hasClass('Xclick') && $('.square8').hasClass('Xclick') && $('.square9').hasClass('Xclick') ||
			$('.square1').hasClass('Xclick') && $('.square4').hasClass('Xclick') && $('.square7').hasClass('Xclick') ||
			$('.square2').hasClass('Xclick') && $('.square5').hasClass('Xclick') && $('.square8').hasClass('Xclick') ||
			$('.square3').hasClass('Xclick') && $('.square6').hasClass('Xclick') && $('.square9').hasClass('Xclick') ||
			$('.square1').hasClass('Xclick') && $('.square5').hasClass('Xclick') && $('.square9').hasClass('Xclick') ||
			$('.square3').hasClass('Xclick') && $('.square5').hasClass('Xclick') && $('.square7').hasClass('Xclick')) {
			console.log('Tic Tac Toe! X Player wins!');
		$('#body').find('p').text("TIC TAC TOE! X PLAYER WINS!");
		}
}