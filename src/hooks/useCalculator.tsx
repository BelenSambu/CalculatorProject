import { useState, useRef } from 'react';

enum Operators {
    plus, rest, multiply, divide
};

export const useCalculator = () => {

    const [previuosNumber, setPrevNumber] = useState('0')
    const [number, setNumber] = useState('0')

    const lastOperation = useRef<Operators>();

    const clear = () => {
        setNumber('0');
        setPrevNumber('0');
    };

    const setResult = (numberText: string) => {
        if( number.includes('.') && numberText === '.' ) return;

        if( number.startsWith('0') || number.startsWith('-0') ) {

            // Validations
            if ( numberText === '.' ) {
                setNumber( number + numberText );
            } else if( numberText === '0' && number.includes('.') ) {
                setNumber(number + numberText );
            } else if( numberText !== '0' && !number.includes('.') ){
                setNumber(numberText);
            } else if (  numberText === '0' && !number.includes('.') ) {
                setNumber( number );
            } else {
                setNumber( number + numberText );
            }

        } else {
            setNumber( number + numberText );
        }

    };

    const plusAndRest = () => {
        if (number.includes('-') ) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };

    const deleteLastNumber = () => {
        let numNegative = '';
        let num = number;

        if ( number.includes('-') ) {
            numNegative = '-';
            num = number.substring(1);
        };

        if ( num.length > 1 ) {
            setNumber( numNegative + num.slice(0, -1) );
        } else {
            setNumber('0');
        };
    };

    const numberChangedToPrevious = () => {
        if ( number.endsWith('.') ) {
            setPrevNumber(number.slice(0,-1));
        } else {
            setPrevNumber(number);
        }
        
        setNumber('0');
    };

    const btnDivide = () => {
        numberChangedToPrevious();
        lastOperation.current = Operators.divide;
    };

    const btnMultiply = () => {
        numberChangedToPrevious();
        lastOperation.current = Operators.multiply;
    };

    const btnRest = () => {
        numberChangedToPrevious();
        lastOperation.current = Operators.rest;
    };

    const btnPlus = () => {
        numberChangedToPrevious();
        lastOperation.current = Operators.plus;
    };

    const calculate = () => {
        const num1 = Number( number );
        const num2 = Number( previuosNumber );

        switch( lastOperation.current ) {
            case Operators.plus:
                setNumber(`${num1 + num2}`);
                break;
            case Operators.rest:
                setNumber(`${num2 - num1}`);
                break;
            case Operators.divide:
                setNumber(`${num2 / num1}`);
                break;
            case Operators.multiply:
                setNumber(`${num1 * num2}`);
                break;
            default:
                break;
        }
    };

    return {
        previuosNumber,
        number,
        clear,
        setResult,
        plusAndRest,
        deleteLastNumber,
        btnDivide,
        btnMultiply,
        btnRest,
        btnPlus,
        calculate
    }
}
