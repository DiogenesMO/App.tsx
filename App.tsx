import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [Fecha, setFecha] = useState("");
  const [nombre, setNombre] = useState("");
  const [LastName, setApellido] = useState("");
  const [Concepto, setConcepto] = useState("");
  const [Codigo, setCodigo] = useState("");
  const [Cuenta, setCuenta] = useState("");
  const [debit, setDebit] = useState("");
  const [Credit, setCredito] = useState("");
  

  const saveDate = (text: string) => {
    //validar que sea una fecha de verdad
    if (text.length >= 10 && text !== "2022-07-29") {
      alert("ERROR");
      return;
    }

    if (text.length >= 10) {
      setFecha(text);
      console.log(Fecha);
    }
  };


  const savenombre = (text: string) => {
    setNombre(text);
  };

  const saveLastName = (text: string) => {
    setApellido(text);
  };

  const saveConcepto= (text: string) => {
    setConcepto(text);
    console.log(Concepto);
  };


  const saveCodigo= (text: string) =>{ 
    setCodigo(text);
    console.log(Codigo);
   };

  const saveCuenta= (text: string) => {
     setCuenta(text);
     console.log(Cuenta);
     };


  const isNumber = (text: string) => {
    const TextIsNumber = Number(text);
    return !Number.isNaN(TextIsNumber);
  };

  const savedebit= (text: string) => { 
    console.log(`La variable text con valor ${text} es un numero?: ${isNumber(text)}`);

  };

 
  const saveCredit= (text: string) => { 
    console.log(`La variable text con valor ${text} es un numero?: ${isNumber(text)}`);
  
  };
  

  const saveJournal = ()  => {
    alert("hola");
  };

  return (
    <View>
      <Text>APP Journal</Text>

      <Text>Fecha</Text>
      <TextInput placeholder='Fecha' 
      onChangeText={(text) => saveDate(text)}
      />

      <Text>Nombre</Text>
      <TextInput placeholder='Nombre' 
       onChangeText={(text) => savenombre(text)} />

      <Text>Apellido</Text>
      <TextInput placeholder='Apellido'  
      onChangeText={(text) => saveLastName(text)} />

      <Text>Concepto</Text>
      <TextInput placeholder='Concepto'  
      onChangeText={(text) => saveConcepto(text)} />

      <View>
      <Text>Codigo</Text>
      <TextInput placeholder='Codigo'  
      onChangeText={(text) => saveCodigo(text)} />

      <Text>Cuenta</Text>
      <TextInput placeholder='Cuenta'  
      onChangeText={(text) => saveCuenta(text)} />

      <Text>Debito</Text>
      <TextInput placeholder='Debito'  
      onChangeText={(text) => savedebit(text)} />

      <Text>Crédito</Text>
      <TextInput placeholder='Crédito' 
       onChangeText={(text) => saveCredit(text)} />

      <Button title='Guardar' onPress={() => saveJournal} />

      </View>
    </View>  
  );
}


//const journal = new Journal(new Date(), Client, 'Venta de computadora');

//journal.addLine('110505', 'caja', 2200, 'D');
//journal.addLine('130101', 'clientes', 2200, 'C');
//journal.addLine('110505', 'caja', 1200, 'D');
//journal.addLine('130101', 'clientes', 1200, 'C');

//console.log(Client);
//console.log(journal);
//console.log('Total Debit:::::',journal.getTotalDebit());
//console.log('Total Credit:::::',journal.getTotalCredit());
//console.log('Los totales son iguales?: ',journal.validateTotalsAreEquals());



  //let person = {
   // name: 'Diogenes',
   // lastName: 'Mojica',
    //phoneNumber: 57347489,
    //age: '19',
    //address: 'zona 8'
  //};
  //const colors =['negro', 'rojo', 'azul']

  
  //const {name, lastName} = person;
  //console.log(name);
  //console.log(lastName);

 // const createPersonObject = () => ({
   // name: 'DIANA',
   //lastName: 'Rivas',
    //age: '21',
    //address: 'zona 5'

  //})

  //let person2 = {...person};
  //person2.name = 'Karina';

  //console.log('person', person);
  //const student = {...person};
  //console.log('student', student)

  //const numeros: number[] = [1,2,3];
  //const frutas: string[] =['pera', 'mango', 'uva'];
  //const mezcla: (number | string) [] = [...numeros, ...frutas];
  //console.log(mezcla);

  //const sumar= (...numeros: number []) => {
    //return numeros.reduce((acumulado, elemento)=>acumulado + elemento, 0);

  //}
    //sumar(1,2,3,4,5,6,7,8);
  
 // return (
    //<View style={styles.container}>
      //<Text>Open up App.tsx to start working on your app!</Text>
      //<StatusBar style="auto" />
    //</View>
 // );
//}

//const styles = StyleSheet.create({
 // container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
//});
