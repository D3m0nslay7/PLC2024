
inpFunc a b = [a..b]


applicatorFunc inpFunc a b s | s == 's' = sum (inpFunc a b) | otherwise = sum (inpFunc a b) `div` 5

main :: IO ()
main = do
    putStrLn "Please give me the 1st integer"
    input1 <- getLine
    let a = read input1 :: Int
    
    putStrLn "Please give me the 2nd integer"
    input2 <- getLine
    let b = read input2 :: Int
    
    putStrLn "Enter 's' to get the sum, or any other character to get the sum divided by 5:"
    s <- getLine
    
    let result = applicatorFunc inpFunc a b (head s)
    putStrLn ("Result = " ++ show result)
