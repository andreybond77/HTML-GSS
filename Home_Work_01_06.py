import string


def count_vowels_and_consonants(text):
    vowels = "аеёиоуыэюяАЕЁИОУЫЭЮЯ"
    consonants = "бвгджзйклмнпрстфхцчшщБВГДЖЗЙКЛМНПРСТФХЦЧШЩ"

    vowel_count = 0
    consonant_count = 0

    for char in text:
        if char in vowels:
            vowel_count += 1
        elif char in consonants:
            consonant_count += 1

    return vowel_count, consonant_count


def find_longest_word(text):
    # Удаляем знаки препинания
    text = text.translate(str.maketrans('', '', string.punctuation))
    words = text.split()
    longest_word = max(words, key=len)
    return longest_word


def count_word_occurrences(text, word):
    # Удаляем знаки препинания
    text = text.translate(str.maketrans('', '', string.punctuation))
    words = text.lower().split()
    return words.count(word.lower())


# Основная программа
user_input = input("Введите текст: ")
vowel_count, consonant_count = count_vowels_and_consonants(user_input)
longest_word = find_longest_word(user_input)

search_word = input("Введите слово для поиска: ")
occurrences = count_word_occurrences(user_input, search_word)

# Вывод результатов
print("Гласных букв:", vowel_count)
print("Согласных букв:", consonant_count)
print("Самое длинное слово:", longest_word)
print(f"Слово '{search_word}' встречается: {occurrences} раз")
