# 재귀함수
# def fib(n):
#     if n == 1 or n == 2:
#         return n
#     else:
#         return fib(n-1) + fib(n-2)

# dp
def fibonacci(n, cnt=0):
    f = [0 for i in range(n+1)]
    f[1] = f[2] = 1
    for i in range(3, n+1):
        f[i] = f[i-1] + f[i-2]
        cnt += 1

    return f"{f[i]} {cnt}"


n = int(input())
print(fibonacci(n))