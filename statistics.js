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
	return summationMM/(N-1);
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
