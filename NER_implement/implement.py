import spacy
import re
nlp = spacy.load('en_core_web_sm')

with open("test/text.txt", "r", encoding="utf-8") as file:
    # Read the entire content of the file
    """
    The split() method doesn't change the file_content variable into something else. 
    It's important to note that split() is used to divide a string into a list of substrings based 
    on a specified delimiter. Thats why spacy can't work properly if the file_content is splited
    """
    file_content = file.read()
    cleaned_file = re.sub(r"[\(\[].*?[\)\]]", "", file_content)
    file_content = cleaned_file

doc = nlp(file_content)
for ent in doc.ents:
    print (ent.text, ent.label_)