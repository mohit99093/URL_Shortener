# URL_Shortener

## Problem Statement
 - Design an algorithm which shortens a string into a shorter string. It is given that input strings are alphabets only and provided in small case only (for eg helloworld). This should get shortened to something smaller (output can be alphanumeric)
---------------------------------------
 
## Solution
- Algorithm
   ## encoding
  - Setp 1 :  check input is valid or not ( input should be only small alphabet as mention in problem statement )
  - Step 2 :  count frequency of continuous character 
              Eg :  input string aaabbdd  so count is a - 3, b -2, d-2
  - Step 3 :  make string from above count Eg :  a3b2d2
  
  ## decoding
  - Step 1 : check input is valid or not 
  - Step 2 : repeat a character for given number Eg : input string is a3b2d2 then output is aaabbdd
 
## Test - case 
  ### encoding
  --------------
 - input : aaaabbbcc
 - output : a3b3c2
 ----------
 - input : a2bbbbc
 - output : error enter valid input
 ---------
 - input : aLbc
 - output : input should be only small latters
 ---------
 - input : a---bbcc
 - output : input should be only small alphabet 
 
  ### Decoding
  --------------
 - input : aaaabbbcc
 - output : Enter a valid input
 ----------
 - input : a2bbbbc
 - output : Enter a valid input
 ---------
 - input : aLbc
 - output : Enter a valid input
 ---------
 - input : a2b3c5
 - output : aabbbccccc


### For Local devlopent
 - clone repo
 - in the main folder do npm i
 - then go to the client folder -  cd Client and then npm i
 
 ## for the connection to the Backend
 -  go to package.json file in Client folder,  add this line   "proxy" : "http://localhost:6006" next to  "private": true,  

