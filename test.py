numeros = [0, 1, 2, 3, 4, 5]
filtro = {0, 1, 3}
filtrados = [str(num) for num in numeros if num not in filtro]
resultado = "-".join(filtrados)
print(resultado)