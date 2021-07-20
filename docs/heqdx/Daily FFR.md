> $S_1, S_2, \dots, S_{13}$ : 각 월의 판매 수량, $D_C$ : 날짜, $D_L$ : 달의 마지막날

* $ACC = S_1+S_2+\dots+S_{11}+S_{12}$

* $ACC_{W} = \frac{1}{12}(S_1 + 2S_2 + \dots + 11S_{11} + 12S_{12})$

* $ACC_{WD} = S_1 \times \frac{1}{12} \times \frac{D_C}{D_L} + S_2 (\frac{1}{12} + \frac{1}{12} \times \frac{D_C}{D_L} ) + \dots + S_{12} (\frac{11}{12} + \frac{1}{12} \times \frac{D_C}{D_L} ) + S_{13} (\frac{12}{12} + \frac{1}{12} \times \frac{D_C}{D_L} ) \times \frac{D_L-D_C}{D_L}$
$= \frac{1}{12} ( S_2 + 2S_3 + \dots + 11S_{11} + 12S_{13} ) + \frac{D_C}{12D_L}(S_1 + S_2 + \dots + S_{11} + S_{12}) + S_{13} (\frac{12}{12} + \frac{1}{12} \times \frac{D_C}{D_L} ) \times \frac{D_L-D_C}{D_L} - S_{13}$
$= ACC_{W-1} + \frac{D_C}{12D_L} \times ACC + S_{13} \times \frac{D_L-D_C}{D_L} + \frac{S_{13}D_C}{12D_L} \times \frac{D_L-D_C}{D_L} - S_{13}$

* $12ACC_{WD} = 12ACC_{W-1} + \frac{D_C}{D_L} \times ACC + 12S_{13} \times \frac{D_L-D_C}{D_L} + S_{13}\frac{D_C}{D_L} \times \frac{D_L-D_C}{D_L} - 12S_{13}$
$ = 12ACC_{W-1} + \frac{D_C}{D_L} \times ACC + 12S_{13} - 12S_{13} \frac{D_C}{D_L} + S_{13}\frac{D_C}{D_L} - S_{13} (\frac{D_C}{D_L})^2 - 12S_{13}$
$ = 12ACC_{W-1} + \frac{D_C}{D_L} \times ACC - 11S_{13} \frac{D_C}{D_L} - S_{13} (\frac{D_C}{D_L})^2$
 
* $ACC_{WD} = ACC_{W-1} + \frac{1}{12} \times \frac{D_C}{D_L}(ACC - 11S_{13} - S_{13}\frac{D_L}{D_C})$
$= ACC_{W-1} + \frac{1}{12} \times \frac{D_C}{D_L}[ACC  - S_{13}(11+\frac{D_L}{D_C})]$
