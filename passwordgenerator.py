import random
import string

print("Welcome To The Password Generator!")

letters = int(input("How many letters do you want in your password?\n"))

numbers = int(input("How many numbers do you want in your password?\n"))

symbols = int(input("How many symbols do you want in your password?\n"))


all_characters = string.ascii_letters + string.digits + string.punctuation

password_list = []
for _ in range(letters):
    password_list.append(random.choice(string.ascii_letters))

for _ in range(symbols):
    password_list += random.choice(string.punctuation)

for _ in range(numbers):
    password_list += random.choice(string.digits)

random.shuffle(password_list)
password = "".join(password_list)
 
print(f"Your password is - {password}")
