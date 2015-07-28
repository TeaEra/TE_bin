define(function (require, exports, module) {
	
	/**
	 * Basic Calculator
	 */
	 
	'use strict';
	
	/**
	 * @param {string} s
	 * @return {number}
	 */
	var calculate = function(s) {
	    var len = s.length;
		if (len === 0) {
			return 0;
		}
		if (len === 1) {
			if (isNaN(s)) {
				return 0;
			}
			return parseInt(s);
		}
		var priorityMat = [ // 运算符优先级表   
		    //        '+' '-' '*' '/' '(' ')'
		    /* '+' */['>','>','<','<','<','>'],
		    /* '-' */['>','>','<','<','<','>'],
		    /* '*' */['>','>','>','>','<','>'],
		    /* '/' */['>','>','>','>','<','>'],
		    /* '(' */['<','<','<','<','<','='],
		    /* ')' */['>','>','>','>',' ','>'],
		    /* '#' */['<','<','<','<','<',' '],
		    /* '^' */['>','>','>','>','<','>']   
		];
		var oprtFunc = function (a, oprt, b) {
			switch (oprt) {  
			    case '+': return a+b;   
			    case '-': return a-b;   
			    case '*': return a*b;   
			    case '/': return a/b;   
			    default : return 0;   
		    }
		};
		var legalOperator = ['+', '-', '*', '/', '(', ')'];
		var operatorStack = [];
		var operandStack = [];
		var i = 0;
		for (i=0; i<len; ++i) {
			var 
				ch = s[i],
				isOprt = legalOperator.indexOf(ch) !== -1;
			if (!isOprt) {
				operandStack.push(ch);
			}
			else {
				switch (priorityMat[legalOperator.indexOf(operatorStack[operatorStack.length - 1])][legalOperator.indexOf(ch)]) {
					case '<':
						operatorStack.push(ch);
					case '=':
						operatorStack.pop();
					case '>':
						var lastOprt = operatorStack.pop();
						var oprd2 = operandStack.pop();
						var oprd1 = operandStack.pop();
						operandStack.push(oprtFunc(oprd1, lastOprt, oprd2));
				}
			}
		}
		return operandStack.pop();
	};
	
	module.exports = calculate;
	
});