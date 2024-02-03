module Main where

main =
    do
    print (myFunc1 5)
    print (myFunc2 10)
    print (myFunc3)

myFunc1 a = a*10
myFunc2 b = b*2
myFunc3 = "Hello, this is 3rd Func"