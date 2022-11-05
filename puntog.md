---
header-includes:
- \usepackage[a4paper, margin=17mm]{geometry}
---
Al año siguiente de haber tomado la decisión anterior, se obtiene información reservada, donde se afirma que el segundo proveedor presenta cambios en su proceso productivo a causa de la incorporación de una nueva línea de fabricación; en esa circunstancia, el taller toma la decisión de volver a comparar los valores de dos muestras (A1 contra A3). Los nuevos valores de la tercera muestra (A3) pueden obtenerse en la Tabla 2.

Adicionalmente, se solicita:
f. Asegúrense que la nueva muestra (A3) proviene de una población normal.
g. Repitan la prueba de hipótesis para las muestras de los proveedores (A1 vs. A3).
h. Calculen el error tipo I, el error tipo II y la potencia de la prueba.
i. Decidan si puede verificarse o no el presunto cambio atribuido al segundo proveedor.
j. Efectúen recomendaciones, si fuese necesario.

| $\alpha = 0,01$ | $\Omega_{1}$ A1          | $\Omega_{2}$ A3          |
| --------------- | ------------------------ | ------------------------ |
| n               | 12                       | 64                       |
| $\overline{X}$  | 74.0351                  | 74,0332                  |
| S               | 0.001213   <br />0,1213% | 0.001255   <br />0,1255% |

---

$$
H_{0}: \mu_{1} = \mu_{2} : \text{Los cambios no son perceptibles}
$$
$$
H_{a}: \mu_{1} \neq \mu_{2} : \text{Los cambios son perceptibles}
$$

|         | $H_{0}$ es verdadera                                    | $H_{0}$ es falsa                                     |
| ------- | ------------------------------------------------------- | ---------------------------------------------------- |
| $H_{0}$ | Decisión correcta:<br />Los cambios no son perceptibles | Error tipo II:<br />Los cambios  no son perceptibles |
| $H_{a}$ | Error tipo I:<br />Los cambios son perceptibles         | Decisión correcta:<br />Los cambios son perceptibles |

$$
S_{p} = \sqrt{ \frac{(n_{1}-1)S_{1}^{2}+(n_{2}-1)S_{2}^{2}}{n_{1}+n_{2}-2} } =
\sqrt{ \frac{(12-1)0.001213^{2}+(64-1)0,001255^{2}}{12+64-2} } =
$$
Calculando con una Casio fx-991LAX y ClassPad de Casio, **dan el resultado siguiente**, en WolframAlpha y SymboLab **dan otros valores**.
$$
\sqrt{ \frac{1,154116x10^{-4}}{74} } = 1,248846x10^{-3}
$$

Es un número demasiado pequeño y distintas familias de calculadoras dan valores distintos, por lo tanto recalculo con las desviaciones estándar representadas en su formato de porcentaje.
$$
S_{p} = \sqrt{ \frac{(n_{1}-1)S_{1}^{2}+(n_{2}-1)S_{2}^{2}}{n_{1}+n_{2}-2} } =
\sqrt{ \frac{(12-1)0.1213^{2}+(64-1)0,1255^{2}}{12+64-2} } =0,124884
$$

$$
t= \frac{(\overline{X}_{\Omega_{1}}-\overline{X}_{\Omega_{2}})-\Delta_{0}}{S_{p}\sqrt{\frac{1}{n_{1}}+\frac{1}{n_{2}}}} =
\frac{(74.0351-74,0332)-0}{0,124884\sqrt{\frac{1}{12}+\frac{1}{64}}} =
0,048363
$$

$$
P=P(T>t) =P(Z>t)= P(Z>0,048363) = 0,51929
$$

---

$$
t_{c}=t_{1-\alpha,\nu}=t_{0,99,74} = -2.377802
$$

$$
(t>t_{c})= (0,0483>-2.3778) \hspace{5mm}\therefore\hspace{5mm}\text{rechazamos }H_{0}
$$

Concluimos que los cambios son perceptibles, por lo tanto recomendamos no continuar con el proveedor.

---

