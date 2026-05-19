from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(label="Nome", max_length=120)
    email = forms.EmailField(label="Email")
    subject = forms.CharField(label="Assunto", max_length=160)
    message = forms.CharField(label="Mensagem", widget=forms.Textarea)

    def clean_message(self):
        message = self.cleaned_data["message"].strip()
        if len(message) < 12:
            raise forms.ValidationError("Conte um pouco mais sobre o projeto ou oportunidade.")
        return message
