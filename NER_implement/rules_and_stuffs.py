with open("test/text.txt", "r", encoding="utf-8") as file:
    # Read the entire content of the file
    # file_content = file.read().split("\n\n")
    file_content = file.read().replace("\n\n", " ")

list = ["my", "I", "Mars"]
# def print_words():
#     j = 0
#     for ctn in file_content:
#         words = ctn.split()
#         for i in words:
#            if i == "my":
#                j += 1
#     print(j)

# print_words()

def print_words():
    for ctn in file_content:
        words = ctn.split()
        for i in words:
            for j in list:
                if i == j:
                    print(i)

print_words()