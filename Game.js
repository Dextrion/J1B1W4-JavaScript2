//Thomas Koek
//AO
alert('You are starting as a new Pokémon trainer and the professor lets you choose your first Pokémon.');
var answer = prompt('Which Pokémon do you choose? (Charmander, Squirtle or Bulbasaur)');
if (answer == 'Charmander' || answer == 'charmander') {
	console.log('Charmander 1');
	alert('You picked Charmander, The fire type Pokémon!');
	alert('The Professor challenges you to your first battle!');
	answer = prompt('The Professor sends out Piplup! A water type Pokémon! What should Charmander do? (Use Scratch or Ember)');
	if (answer == 'Scratch' || answer == 'scratch') {
		console.log('Charmander 2 Scratch');
		alert('Piplup used Bubble! It was super effective!');
		alert('Charmander used Scratch.');
		answer = prompt('What should Charmander do? (Use Scratch or Ember)');
		if (answer == 'Scratch' || answer == 'scratch') {
			console.log('Charmander 3 Scratch Scratch');
			alert('Piplup used Bubble! It missed!');
			alert('Charmander used Scratch! Critical hit!');
			alert('Piplup fainted! Player wins!');
			document.write('Thank you for playing!');
		} else if (answer == 'Ember' || answer == 'ember') {
			console.log('Charmander 3 Scratch Ember');
			alert('Piplup used Bubble! It was super effective!');
			alert('Charmander fainted! The Professor wins!');
			document.write('Thank you for playing!');
		}
	} else if (answer == 'Ember' || answer == 'ember') {
		console.log('Charmander 2 Ember')
		alert('Piplup used Bubble! It was super effective!');
		alert('Charmander used Ember! it was not very effective!');
		answer = prompt('What should Charmander do? (Use Scratch or Ember)');
		if (answer == 'Scratch' || answer == 'scratch') {
			console.log('Charmander 3 Ember Scratch');
			alert('Piplup used Bubble! It was super effective!');
			alert('Charmander fainted! The Professor wins!');
			document.write('Thank you for playing!');
		} else if (answer == 'Ember' || answer == 'ember') {
			console.log('Charmander 3 Ember Ember');
			alert('Piplup used Bubble! It was super effective!');
			alert('Charmander fainted! The Professor wins!');
			document.write('Thank you for playing!');
		}
	}
} else if (answer == 'Squirtle' || answer == 'squirtle') {
	console.log('Squirtle 1');
	alert('You picked Squirtle, the water type Pokémon!');
	alert('The Professor challenges you to your first battle!');
	answer = prompt('The Professor sends out Piplup! A water type Pokémon! What should Squirtle do? (Use Pound or Bubble)');
	if (answer == 'Pound' || answer == 'pound') {
		console.log('Squirtle 2 Pound');
		alert('Piplup used Pound!');
		alert('Squirtle used Pound!');
		answer = prompt('What should Squirtle do? (Use Pound or Bubble)');
		if (answer == 'Pound' || answer == 'pound') {
			console.log('Squirtle 3 Pound Pound');
			alert('Piplup used Bubble! It was not very effective!');
			alert('Squirtle used Pound!');
			alert('Piplup fainted! Player wins!');
			document.write('Thank you for playing!');
		} else if (answer == 'Bubble' || answer == 'bubble') {
			console.log('Squirtle 3 Pound Bubble');
			alert('Piplup used Bubble! Critical hit!');
			alert('Squirtle fainted! The Professor wins!');
			document.write('Thank you for playing!');
		}
	} else if (answer == 'Bubble' || answer == 'bubble') {
		console.log('Squirtle 2 Bubble');
		alert('Piplup used pound!');
		alert('Squirtle used Bubble! It was not very effective!');
		answer = prompt('What should Squirtle do? (Use Pound or Bubble)');
		if (answer == 'Pound' || answer == 'pound') {
			console.log('Squirtle 3 Bubble Pound');
			alert('Piplup used Pound! It missed!');
			alert('Squirtle used Pound! Critical hit!');
			alert('Piplup fainted! Player wins!');
			document.write('Thank you for playing!');
		} else if (answer == 'Bubble' || answer == 'bubble') {
			console.log('Squirtle 3 Bubble Bubble');
			alert('Piplup used Pound!');
			alert('Squirtle fainted! The Professor wins!');
			document.write('Thank you for playing!');
		}	
	}
} else if (answer == 'Bulbasaur' || answer == 'bulbasaur') {
	console.log('Bulbasaur 1');
	alert('You picked Bulbasaur, The grass type Pokémon!');
	alert('The Professor challenges you to your first battle!');
	answer = prompt('The Professor sends out Piplup! A water type Pokémon! What should Bulbasaur do? (Use Tackle or Vine Whip)');
	if (answer == 'Tackle' || answer == 'tackle') {
		console.log('Bulbasaur 2 Tackle');
		alert('Piplup used Bubble! It was not very effective!');
		alert('Bulbasaur used Tackle!');
		answer = prompt('What should Bulbasaur do? (Use Tackle or Vine Whip)');
		if (answer == 'Tackle' || answer == 'tackle') {
			console.log('Bulbasaur 3 Tackle Tackle');
			alert('Piplup used pound!');
			alert('Bulbasaur used Tackle!');
			alert('Piplup fainted! Player wins!');
			document.write('Thank you for playing!');
		} else if (answer == 'Vine Whip' || answer == 'vine whip') {
			console.log('Bulbasaur 3 Tackle Vine Whip');
			alert('Piplup used Pound!');
			alert('Bulbasaur used Vine Whip! It was very effective!');
			alert('Piplup fainted! Player wins!');
			document.write('Thank you for playing!');
		}
	} else if (answer == 'Vine Whip' || answer == 'vine whip') {
		console.log('Bulbasaur 2 Vine Whip');
		alert('Piplup used Pound!');
		alert('Bulbasaur used Vine whip! It was very effective!');
		answer = prompt('What should Bulbasaur do? (Use Tackle or Vine Whip)');
		if (answer == 'Tackle' || answer == 'tackle') {
			console.log('Bulbasaur 3 Vine whip Tackle');
			alert('Piplup used Pound! Critical hit!');
			alert('Bulbasaur fainted! The professor wins!');
			document.write('Thank you for playing!');

		} else if (answer == 'Vine Whip' || answer == 'vine whip') {
			console.log('Bulbasaur 3 Vine Whip Vine Whip');
			alert('Piplup used Bubble! it was not very effective!');
			alert('Bulbasaur used Vine Whip! It was super effective!');
			alert('Piplup fainted! Player wins!');
			document.write('Thank you for playing!');
		}
	}
}