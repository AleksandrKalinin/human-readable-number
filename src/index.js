module.exports = function toReadable (number) {
  let num = number.toString();
  let message = [];
  if (num.length == 1) {
  	countDigits(num);
  }
  else if(num.length == 2){
  	countTens(num);
  }
  if (num.length == 3) {
  	countHundreds(num);
  }
  function countDigits(number){
    let lng = number.length - 1;
  	if (number[0] == '0' && number.length == 1) { message.push("zero"); }
  	else if (number[0] == '1' && number.length == 1) { message.push("one"); }
  	else if (number[0] == '2' && number.length == 1) { message.push("two"); }
  	else if (number[0] == '3' && number.length == 1) { message.push("three"); }
  	else if (number[0] == '4' && number.length == 1) { message.push("four"); }
  	else if (number[0] == '5' && number.length == 1) { message.push("five"); }
  	else if (number[0] == '6' && number.length == 1) { message.push("six"); }
  	else if (number[0] == '7' && number.length == 1) { message.push("seven"); }  	  	
  	else if (number[0] == '8' && number.length == 1) { message.push("eight"); }
  	else if (number[0] == '9' && number.length == 1) { message.push("nine"); }

  	else if (number[0] == '1' && number[1] == '1' ) { message.push('eleven');	}
  	else if (number[0] == '1' && number[1] == '2' ) { message.push('twelve'); 	}
  	else if (number[0] == '1' && number[1] == '3' ) { message.push("thirteen"); }
  	else if (number[0] == '1' && number[1] == '4' ) { message.push("fourteen"); }
  	else if (number[0] == '1' && number[1] == '5' ) { message.push("fifteen");	}
  	else if (number[0] == '1' && number[1] == '6' ) { message.push("sixteen"); }
  	else if (number[0] == '1' && number[1] == '7' ) { message.push("seventeen"); }
  	else if (number[0] == '1' && number[1] == '8' ) { message.push("eighteen"); }
  	else if (number[0] == '1' && number[1] == '9' ) { message.push("nineteen"); }

  	else if (number[1] == '1') { message.push('one');	}
  	else if (number[1] == '2') { message.push('two'); 	}
  	else if (number[1] == '3') { message.push("three"); }
  	else if (number[1] == '4') { message.push("four"); }
  	else if (number[1] == '5') { message.push("five");	}
  	else if (number[1] == '6') { message.push("six"); 	}
  	else if (number[1] == '7') { message.push("seven"); }
  	else if (number[1] == '8') { message.push("eight"); }
  	else if (number[1] == '9') {message.push("nine");	}   	
  }

  function countTens(number){
  	if (number[0] == '1' && number[1] == '0') { message.push('ten');	}
  	else if (number[0] == '2') { message.push('twenty'); 	}
  	else if (number[0] == '3') { message.push("thirty"); }
  	else if (number[0] == '4') { message.push("forty"); }
  	else if (number[0] == '5') { message.push("fifty");	}
  	else if (number[0] == '6') { message.push("sixty"); 	}
  	else if (number[0] == '7') { message.push("seventy"); }
  	else if (number[0] == '8') { message.push("eighty"); }
  	else if (number[0] == '9') { message.push("ninety");	} 
  	countDigits(number);   	
  }
  function countHundreds(number){
  	if (number[0] == '1') { message.push('one hundred');	}
  	else if (number[0] == '2') { message.push('two hundred'); 	}
  	else if (number[0] == '3') { message.push("three hundred"); }
  	else if (number[0] == '4') { message.push("four hundred"); }
  	else if (number[0] == '5') { message.push("five hundred");	}
  	else if (number[0] == '6') { message.push("six hundred"); 	}
  	else if (number[0] == '7') { message.push("seven hundred"); }
  	else if (number[0] == '8') { message.push("eight hundred"); }
  	else { message.push("nine hundred");	}
  	countTens(number.substring(1));  
  }

  return (message.join(' '));
  
}
