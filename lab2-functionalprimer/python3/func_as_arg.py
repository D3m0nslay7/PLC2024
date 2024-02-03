def listFunc(a, b):
    return [i for i in range(a, b)] #Create list of ints from 1 to 5, Haskell equivalent [1..5]

def applicatorFunc(inpFunc, arg, a, b):
    if arg=='s':
        return sum(inpFunc(a, b))
    else:
        return sum(inpFunc(a, b))/5


a = int(input("Input the first integer: "))
b = int(input("Input the second integer: "))

arg = input("please input s if you want to divide the sum by 5 or anything else if you just want the sum of both integers: ")

print(applicatorFunc(listFunc, arg, a, b))
