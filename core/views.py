from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.views.generic.edit import FormView

from .forms import ContactForm
from .services import HIGHLIGHTS, PROJECTS, STATS, STUDY_ITEMS, TECH_STACK, TIMELINE


class HomeView(FormView):
    template_name = "home.html"
    form_class = ContactForm
    success_url = "/#contato"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(
            {
                "projects": PROJECTS,
                "highlights": HIGHLIGHTS,
                "tech_stack": TECH_STACK,
                "timeline": TIMELINE,
                "stats": STATS,
                "study_items": STUDY_ITEMS,
            }
        )
        return context

    def form_valid(self, form):
        data = form.cleaned_data
        send_mail(
            subject=f"Portfolio | {data['subject']}",
            message=f"Nome: {data['name']}\nEmail: {data['email']}\n\n{data['message']}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_EMAIL],
            fail_silently=False,
        )
        messages.success(self.request, "Mensagem enviada com sucesso. Érika retornará em breve.")
        return super().form_valid(form)

    def form_invalid(self, form):
        messages.error(self.request, "Revise os campos destacados e tente novamente.")
        return super().form_invalid(form)

