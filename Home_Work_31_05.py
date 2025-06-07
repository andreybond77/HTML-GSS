# def remove_spaces(input_string):
#     return input_string.replace(" ", "")
#
# # Пример использования
# user_input = input("Введите строку: ")
# result = remove_spaces(user_input)
# print("Строка без пробелов:", result)

#################################################################

def find_longest_word(input_string):
    words = input_string.split()  # Разделяем строку на слова
    longest_word = max(words, key=len)  # Находим самое длинное слово
    return longest_word

# Пример использования
user_input = input("Введите строку: ")
longest_word = find_longest_word(user_input)
print("Самое длинное слово:", longest_word)

