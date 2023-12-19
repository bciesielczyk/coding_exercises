def reverse_string(input_str):
    # return input_str[::-1]
    return ''.join(reversed(input_str))

original = "Hello, Python!"
reversed_str = reverse_string(original)
print(reversed_str)

