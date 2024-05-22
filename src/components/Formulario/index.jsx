import { useEffect, useState } from "react";

const Formulario = () => {


    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');


    // mount
    // update
    // onmount


    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, [])


    useEffect(() => {
        console.log("O estado nome mudou para " + nome)
    }, [nome])

    useEffect(() => {
        console.log("A materia A mudou para " + materiaA)
        console.log("A materia B mudou para " + materiaB)
        console.log("A materia C mudou para " + materiaC)
    }, [materiaA, materiaB, materiaC])

    const nomeDoUsuario = (evento) => {
        setNome(retornaNome => {
            return evento.target.value
        })
    }

    const mediaDasNotas = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media === 0) {
            return (
                <p>Porfavor, digite a nota das 3 matérias.</p>
            )
        }
        else if (media > 7.5) {
            return (
                <p>Ola, {nome}. Sua média foi {media.toFixed(2)} Você foi aprovado! =)</p>
            )
        } else {
            return (
                <p>Ola, {nome}. Sua média foi {media.toFixed(2)} Você foi reprovado! =(</p>
            )
        }
    }


    return (
        <form>
            <input type="text" placeholder="Digite seu nome" onChange={nomeDoUsuario} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {mediaDasNotas()}
        </form>
    )

}
export default Formulario

