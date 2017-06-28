<h1 align="center">API Investments</h1>

<h4 align="center">Serviço para obter valores atuais das seguintes taxas: poupança, Selic e IPCA.</h4>

<h5 align="center"><i>Service to obtain current values ​​of the following rates: Savings, Selic and IPCA.</i></h5>

<br />

## Get started

```sh
$ git clone https://github.com/jonatascp/api-investments.git
$ cd api-investments
$ npm install api-investments
$ npm start
```

## Example open Home page

http://localhost:3000

## Example return JSON Poupança (http://localhost:3000/poupanca)

```js
{  
   "date-update":"2017-06-23T00:00:00-03:00",
   "title":"INDICADOR_POUPANCA",
   "rate":{  
      "value":"0,5519"
   }
}
```

## Example return JSON Selic (http://localhost:3000/selic)

```js
{  
   "date-update":"2017-06-27T21:45:02-03:00",
   "title":"Taxa Selic",
   "rate":{  
      "value":"10,25",
      "date":"31/05/2017"
   },
   "daily":{  
      "value":"10,15",
      "date":"27/06/2017"
   }
}
```

## Example return JSON Ipca (http://localhost:3000/ipca)

```js
{  
   "date-update":"2017-06-27T21:55:01-03:00",
   "title":"Taxa de Inflação",
   "rate":{  
      "value":"4,5",
      "obs":"(+/- 1,5 p.p.)"
   },
   "daily":{  
      "value":"3,6",
      "obs":"(período de 12 meses - IPCA)"
   }
}
```

## Example return JSON Títulos Tesouro direto (http://localhost:3000/titulos-tesouro-direto)

```js
{  
   "data":"27/06/2017 15:38",
   "titulosInvestir":[  
      {  
         "titulo":"Tesouro IPCA+ 2024 (NTNB Princ)",
         "vencimento":"15/08/2024",
         "taxaRendimento":"5,58",
         "valorMinimo":"R$40,76",
         "precoUnitario":"R$2.038,24"
      },
      {  
         "titulo":"Tesouro IPCA+ 2035 (NTNB Princ)",
         "vencimento":"15/05/2035",
         "taxaRendimento":"5,65",
         "valorMinimo":"R$33,78",
         "precoUnitario":"R$1.126,05"
      },
      {  
         "titulo":"Tesouro IPCA+ 2045 (NTNB Princ)",
         "vencimento":"15/05/2045",
         "taxaRendimento":"5,65",
         "valorMinimo":"R$32,54",
         "precoUnitario":"R$650,92"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2026 (NTNB)",
         "vencimento":"15/08/2026",
         "taxaRendimento":"5,65",
         "valorMinimo":"R$31,38",
         "precoUnitario":"R$3.138,19"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2035 (NTNB)",
         "vencimento":"15/05/2035",
         "taxaRendimento":"5,63",
         "valorMinimo":"R$31,46",
         "precoUnitario":"R$3.146,91"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2050 (NTNB)",
         "vencimento":"15/08/2050",
         "taxaRendimento":"5,64",
         "valorMinimo":"R$32,29",
         "precoUnitario":"R$3.229,17"
      },
      {  
         "titulo":"Tesouro Prefixado 2020 (LTN)",
         "vencimento":"01/01/2020",
         "taxaRendimento":"9,67",
         "valorMinimo":"R$31,74",
         "precoUnitario":"R$793,63"
      },
      {  
         "titulo":"Tesouro Prefixado 2023 (LTN)",
         "vencimento":"01/01/2023",
         "taxaRendimento":"10,78",
         "valorMinimo":"R$34,19",
         "precoUnitario":"R$569,92"
      },
      {  
         "titulo":"Tesouro Selic 2023 (LFT)",
         "vencimento":"01/03/2023",
         "taxaRendimento":"0,02",
         "valorMinimo":"R$89,03",
         "precoUnitario":"R$8.903,67"
      }
   ],
   "titulosResgatar":[  
      {  
         "titulo":"Tesouro IPCA+ 2019 (NTNB Princ)",
         "vencimento":"15/05/2019",
         "taxaRendimento":"5,00",
         "precoUnitario":"R$2.737,31"
      },
      {  
         "titulo":"Tesouro IPCA+ 2024 (NTNB Princ)",
         "vencimento":"15/08/2024",
         "taxaRendimento":"5,70",
         "precoUnitario":"R$2.021,86"
      },
      {  
         "titulo":"Tesouro IPCA+ 2035 (NTNB Princ)",
         "vencimento":"15/05/2035",
         "taxaRendimento":"5,77",
         "precoUnitario":"R$1.103,51"
      },
      {  
         "titulo":"Tesouro IPCA+ 2045 (NTNB Princ)",
         "vencimento":"15/05/2045",
         "taxaRendimento":"5,77",
         "precoUnitario":"R$630,70"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2020 (NTNB)",
         "vencimento":"15/08/2020",
         "taxaRendimento":"5,39",
         "precoUnitario":"R$3.114,54"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2024 (NTNB)",
         "vencimento":"15/08/2024",
         "taxaRendimento":"5,68",
         "precoUnitario":"R$3.120,65"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2026 (NTNB)",
         "vencimento":"15/08/2026",
         "taxaRendimento":"5,77",
         "precoUnitario":"R$3.113,22"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2035 (NTNB)",
         "vencimento":"15/05/2035",
         "taxaRendimento":"5,75",
         "precoUnitario":"R$3.106,87"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2045 (NTNB)",
         "vencimento":"15/05/2045",
         "taxaRendimento":"5,82",
         "precoUnitario":"R$3.099,44"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2050 (NTNB)",
         "vencimento":"15/08/2050",
         "taxaRendimento":"5,76",
         "precoUnitario":"R$3.175,01"
      },
      {  
         "titulo":"Tesouro Prefixado 2018 (LTN)",
         "vencimento":"01/01/2018",
         "taxaRendimento":"9,01",
         "precoUnitario":"R$957,12"
      },
      {  
         "titulo":"Tesouro Prefixado 2019 (LTN)",
         "vencimento":"01/01/2019",
         "taxaRendimento":"9,09",
         "precoUnitario":"R$877,65"
      },
      {  
         "titulo":"Tesouro Prefixado 2020 (LTN)",
         "vencimento":"01/01/2020",
         "taxaRendimento":"9,79",
         "precoUnitario":"R$791,46"
      },
      {  
         "titulo":"Tesouro Prefixado 2021 (LTN)",
         "vencimento":"01/01/2021",
         "taxaRendimento":"10,39",
         "precoUnitario":"R$707,53"
      },
      {  
         "titulo":"Tesouro Prefixado 2023 (LTN)",
         "vencimento":"01/01/2023",
         "taxaRendimento":"10,90",
         "precoUnitario":"R$566,54"
      },
      {  
         "titulo":"Tesouro Prefixado com Juros Semestrais 2021 (NTNF)",
         "vencimento":"01/01/2021",
         "taxaRendimento":"10,25",
         "precoUnitario":"R$1.041,88"
      },
      {  
         "titulo":"Tesouro Prefixado com Juros Semestrais 2023 (NTNF)",
         "vencimento":"01/01/2023",
         "taxaRendimento":"10,62",
         "precoUnitario":"R$1.025,05"
      },
      {  
         "titulo":"Tesouro Prefixado com Juros Semestrais 2025 (NTNF)",
         "vencimento":"01/01/2025",
         "taxaRendimento":"10,81",
         "precoUnitario":"R$1.010,34"
      },
      {  
         "titulo":"Tesouro Prefixado com Juros Semestrais 2027 (NTNF)",
         "vencimento":"01/01/2027",
         "taxaRendimento":"10,87",
         "precoUnitario":"R$1.000,99"
      },
      {  
         "titulo":"Tesouro Selic 2021 (LFT)",
         "vencimento":"01/03/2021",
         "taxaRendimento":"0,06",
         "precoUnitario":"R$8.894,24"
      },
      {  
         "titulo":"Tesouro Selic 2023 (LFT)",
         "vencimento":"01/03/2023",
         "taxaRendimento":"0,06",
         "precoUnitario":"R$8.883,58"
      },
      {  
         "titulo":"Tesouro IGPM+ com Juros Semestrais 2017 (NTNC)",
         "vencimento":"01/07/2017",
         "taxaRendimento":"8,02",
         "precoUnitario":"R$3.634,11"
      },
      {  
         "titulo":"Tesouro IGPM+ com Juros Semestrais 2021 (NTNC)",
         "vencimento":"01/04/2021",
         "taxaRendimento":"5,61",
         "precoUnitario":"R$3.630,90"
      },
      {  
         "titulo":"Tesouro IGPM+ com Juros Semestrais 2031 (NTNC)",
         "vencimento":"01/01/2031",
         "taxaRendimento":"5,72",
         "precoUnitario":"R$5.736,38"
      }
   ]
}
```
