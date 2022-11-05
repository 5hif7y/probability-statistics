# Probability and statistics
Final Exposition of Probability and Statistics



# Part 1



# Part 2

| English                                                      | Español                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| The next year after making the last decision, confidential information is obtained, where its stated that the second supplier presents changes in its production process due to the incorporation of a new manufacturing line; in that circumstance, the workshop makes the decision to re-compare the values of two samples (A1 against A3). The new values of the third sample (A3) can be obtained in table 2. | Al año siguiente de haber tomado la decisión anterior, se obtiene información reservada, donde se afirma que el segundo proveedor presenta cambios en su proceso productivo a causa de la incorporación de una nueva línea de fabricación; en esa circunstancia, el taller toma la decisión devolver a comparar los valores de dos muestras (A1 contra A3). Los nuevos valores de la tercera muestra (A3) pueden obtenerse en la Tabla 2. |



<details>
  <summary>Show/Hide JavaScript code used to calculate the statistics of the samples</summary>

```js
// Matías Alemán 5hifty

function calcSummation(X, N){

	result = 0;
	for(let i = 0; i < N; i++){
		result = result + X[i];
	}
	return result;
}

function calcMean(X,N){
	return calcSummation(X,N) / N;
}

function calcVariance(X,N){

	let summationMM = 0; // Summation of elements = acummulation + (X[i]-mean)^2
	let mean = calcMean(X,N);
	for(let i = 0; i < N; i++){
		summationMM = summationMM + ((X[i]-mean) * (X[i]-mean));
	}
	return summationMM/N;
}

function calcStdDev(X,N){
	return Math.sqrt(calcVariance(X,N));
}

function procSample(X,N){
	console.log("Tamaño de la muestra: "+ X.length);
	console.log("Sumatoria total de los elementos: "+ calcSummation(X,N));
	console.log("Media: "+ calcMean(X,N));
	console.log("Varianza: "+ calcVariance(X,N));
	console.log("Desviacion estandar: "+ calcStdDev(X,N));
}

	const A1 = [74.034, 74.034, 74.036, 74.033, 74.035,
		    74.035, 74.036, 74.035, 74.037, 74.034,
		    74.036, 74.037];
	
	const A3 = [74.033, 74.035, 74.032, 74.033,
		    74.032, 74.035, 74.030, 74.033,
		    74.032, 74.034, 74.031, 74.032,
		    74.032, 74.032, 74.033, 74.031,
		    74.032, 74.034, 74.034, 74.034,
		    74.032, 74.035, 74.032, 74.033,
		    74.035, 74.032, 74.035, 74.035,
		    74.035, 74.034, 74.034, 74.033,
		    74.033, 74.035, 74.033, 74.033,
		    74.033, 74.035, 74.033, 74.032,
		    74.034, 74.032, 74.033, 74.033,
		    74.035, 74.033, 74.033, 74.032,
		    74.032, 74.034, 74.032, 74.036,
		    74.034, 74.034, 74.034, 74.033,
		    74.033, 74.032, 74.034, 74.033,
		    74.035, 74.034, 74.034, 74.031];

console.log("\nMuestra A1");
procSample(A1, A1.length);
console.log("\nMuestra A3");
procSample(A3, A3.length);
```
</details>


```sh
$ node statistics.js

Muestra A1
Tamaño de la muestra: 12
Sumatoria total de los elementos: 888.422
Media: 74.03516666666667
Varianza: 0.00000147222222222286
Desviacion estandar: 0.0012133516482136825

Muestra A3
Tamaño de la muestra: 64
Sumatoria total de los elementos: 4738.125999999999
Media: 74.03321874999999
Varianza: 0.000001577148437500739
Desviacion estandar: 0.0012558457060884267
```

