import React, { Suspense, useState, useEffect } from "react";
import axios from 'axios';



function DataPage() {
    return (
        <Suspense fallback={<h1>Loading todos...</h1>}>
            <Title></Title>
        </Suspense>
    );
}

function fetchData() {
    let status = 'pending';
    let promise = axios.get('https://jsonplaceholder.typicode.com/todos/1');
    let result;
    let waiting = promise.then(data => {
        setTimeout(() => {
            status = 'success';

            result = data;
        }, 3000);
    }, error => {
        status = 'error';
        console.log(error);
    });
    return {
        read() {
            if (status == 'pending') {
                throw waiting;
            } else if (status == 'success') {
                return result;
            } else {
                throw result;
            }
        }
    }
}

// so the strategy is to return a object, with a key value of a function, that either throws errors or returns the value, 
// and you call the object function and it either throws the error or returns the result needed so both cases are handled
// any errors are thrown and that's the end, or a result is returned.
/**
 * and so this Component calls read and read doesn't complete for 3+ seconds, and so the Suspense loads until read is completed.
 * 
 */

let resource = fetchData();

function Title() {
    let data = resource.read();
    return <h1>Title: {data.title}</h1>
}

export default DataPage;