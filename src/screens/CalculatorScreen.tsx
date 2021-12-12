import React from 'react';
import { View, Text } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const {
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
    } = useCalculator();

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
                <ButtonComponent label="/" color="#FF9427"  action={btnDivide}/>
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
