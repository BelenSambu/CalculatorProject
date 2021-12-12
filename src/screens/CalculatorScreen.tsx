import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { styles } from '../theme/appTheme';

enum Operators {
    plus, rest, multiply, divide
};

export const CalculatorScreen = () => {
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

    return (
        <View style={styles.calculatorContainer}>
            {
                previuosNumber !== '0' && (
                    <Text style={styles.resultSmall}>
                        {previuosNumber}
                    </Text>
                )
            }
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
                {number}
            </Text>
            <View style={styles.row}>
                <ButtonComponent label="C" color="#9B9B9B" action={clear} />
                <ButtonComponent label="+/-" color="#9B9B9B"  action={plusAndRest}/>
                <ButtonComponent label="del" color="#9B9B9B"  action={deleteLastNumber}/>
                <ButtonComponent label="÷" color="#FF9427"  action={btnDivide}/>
            </View>
            <View style={styles.row}>
                <ButtonComponent label="7" action={setResult} />
                <ButtonComponent label="8" action={setResult} />
                <ButtonComponent label="9" action={setResult} />
                <ButtonComponent label="x" color="#FF9427"  action={btnMultiply}/>
            </View>
            <View style={styles.row}>
                <ButtonComponent label="4" action={setResult}/>
                <ButtonComponent label="5" action={setResult}/>
                <ButtonComponent label="6" action={setResult}/>
                <ButtonComponent label="-" color="#FF9427"  action={btnRest}/>
            </View>
            <View style={styles.row}>
                <ButtonComponent label="1" action={setResult}/>
                <ButtonComponent label="2" action={setResult}/>
                <ButtonComponent label="3" action={setResult}/>
                <ButtonComponent label="+" color="#FF9427"  action={btnPlus}/>
            </View>
            <View style={styles.row}>
                <ButtonComponent label="0" width action={setResult}/>
                <ButtonComponent label="." action={setResult}/>
                <ButtonComponent label="=" color="#FF9427" action={calculate} />
            </View>
        </View>
    )
}
