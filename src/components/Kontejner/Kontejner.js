import React, { useState } from "react";
import { Container } from "./KontejnerStyle";
import { Button, Button2, Button3, Button4 } from "../Button/ButtonStyle";
import { Result } from "../Result/ResultStyle";
import { Redak } from "../Redak/RedakStyle";
function Kontejner() {
    const [broj, setBroj] = useState("");
    const [broj2, setBroj2] = useState("");
    const [racunskaOperacija, setRacunskaOperacija] = useState("");
    const [puni, setPuni] = useState(true)
    const [rezultat, setRezultat] = useState(0)
    //const a = broj + e.value;
    //setBroj(a);
    let a = 0;
    let b = 0;

    const postaviBroj=(event)=>{
        if (puni===true){  
            a = broj + event.target.value;  
            setBroj(a)
            setTimeout(() => {
                console.log('vrijednost', a)
            }, 1000);
        }
        else if (puni===false){
            b = broj2 + event.target.value;  
            setBroj2(b)
            setTimeout(() => {
                console.log('vrijednost', b)
            }, 1000);
        }
        
    }

    const clear=()=>{
        setBroj("")
        setBroj2("")
        setRacunskaOperacija("")
        setPuni(true)
        setRezultat(0)
    }

    const izracunaj=()=>{
        switch(racunskaOperacija){
            case '/':
                setRezultat(parseFloat(broj)/parseFloat(broj2))
                break;
            case 'x':
                setRezultat(parseFloat(broj)*parseFloat(broj2))
                break;
            case '+':
                setRezultat(parseFloat(broj)+parseFloat(broj2))
                break;
            case '-':
                setRezultat(parseFloat(broj)-parseFloat(broj2))
                break;
            default:
                console.log("Krivi unos")
                break;
        }
        setBroj("")
        setBroj2("")
        setRacunskaOperacija("")
        setPuni(true)
    }

    const operacija=(event)=>{
        setPuni(false)
        setRacunskaOperacija(event.target.value) 
        console.log(event.target.value)
    }



    return (
        <>
            <Container>
                <Result>{rezultat}</Result>
                <Redak>
                    <Button onClick={clear}>C</Button>
                    <Button>+/-</Button>
                    <Button>%</Button>
                    <Button2 value={'/'} onClick={operacija}>/</Button2>
                </Redak>
                <Redak>
                    <Button3 value={7} onClick={postaviBroj}>7</Button3>
                    <Button3 value={8} onClick={postaviBroj}>8</Button3>
                    <Button3 value={9} onClick={postaviBroj}>9</Button3>
                    <Button2 value={'x'} onClick={operacija}>x</Button2>
                </Redak>
                <Redak>
                    <Button3 value={4} onClick={postaviBroj}>4</Button3>
                    <Button3 value={5} onClick={postaviBroj}>5</Button3>
                    <Button3 value={6} onClick={postaviBroj}>6</Button3>
                    <Button2 value={'-'} onClick={operacija}>-</Button2>
                </Redak>
                <Redak>
                    <Button3 value={1} onClick={postaviBroj}>1</Button3>
                    <Button3 value={2} onClick={postaviBroj}>2</Button3>
                    <Button3 value={3} onClick={postaviBroj}>3</Button3>
                    <Button2 value={'+'} onClick={operacija}>+</Button2>
                </Redak>
                <Redak>
                    <Button4 value={0} onClick={postaviBroj}>0</Button4>
                    <Button3>.</Button3>
                    <Button2 value={'='} onClick={izracunaj}>=</Button2>
                </Redak>
            </Container>
        </>
    )
}

export default Kontejner;