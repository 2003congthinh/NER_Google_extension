from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

import spacy
import re

nlp = spacy.load('en_core_web_sm')

def ner_text(text):
    cleaned_file = re.sub(r"[\(\[].*?[\)\]]", "", text)
    doc = nlp(cleaned_file)
    entities = []
    for ent in doc.ents:
        entities.append((ent.text, ent.label_))
    return entities

@csrf_exempt
def receive_text(request):
    if request.method == 'POST':
        received_data = json.loads(request.body)
        received_text = received_data.get('text')
        # received_text = request.POST.get('text')  # Get the text from the POST request
        print(received_text)
        highlight_text = ner_text(received_text)
        # Process the received_text
        # Perform operations and send a response if required
        print(highlight_text)
        return JsonResponse({'result': highlight_text})