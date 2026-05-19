# Portfolio Premium | Érika Cordeiro

Portfolio pessoal moderno construído com Django, JavaScript puro, HTML e CSS modular. O projeto transmite autoridade técnica, criatividade, inovação e experiência real com sistemas inteligentes.

## Stack

- Python
- Django
- JavaScript
- HTML
- CSS
- Whitenoise
- Gunicorn
- python-dotenv
- Pillow

## Como rodar localmente

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Mac/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

### Instalação

```bash
pip install -r requirements.txt
```

### Variáveis de ambiente

Crie um arquivo `.env` baseado no `.env.example`.

```bash
cp .env.example .env
```

### Rodar projeto

```bash
python manage.py migrate
python manage.py runserver
```

Acesse: http://127.0.0.1:8000

## Blueprint Render

O repositório inclui `render.yaml`. No Render, escolha Blueprint, branch `main` e deixe o Blueprint Path como `render.yaml`.

Durante a criação, preencha as variáveis marcadas como secretas: `CONTACT_EMAIL`, `DEFAULT_FROM_EMAIL`, `EMAIL_HOST_USER` e `EMAIL_HOST_PASSWORD`.

## Deploy em produção

Configure no serviço de hospedagem:

```env
SECRET_KEY=sua-chave-secreta
DEBUG=False
ALLOWED_HOSTS=seu-dominio.onrender.com
CSRF_TRUSTED_ORIGINS=https://seu-dominio.onrender.com
```

Build command sugerido:

```bash
pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate
```

Start command:

```bash
gunicorn config.wsgi:application
```

## Email do formulário

Em produção, configure SMTP nas variáveis de ambiente do Render:

```env
CONTACT_EMAIL=email-que-vai-receber-as-mensagens@gmail.com
DEFAULT_FROM_EMAIL=seu-email@gmail.com
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_USE_SSL=False
EMAIL_HOST_USER=seu-email@gmail.com
EMAIL_HOST_PASSWORD=sua-senha-de-app
```

Para Gmail, use uma **senha de app**, não a senha normal da conta.

## Estrutura

```text
portfolio/
├── manage.py
├── requirements.txt
├── .env.example
├── .gitignore
├── Procfile
├── render.yaml
├── runtime.txt
├── README.md
├── config/
├── core/
├── templates/
├── static/
│   ├── css/
│   ├── js/
│   └── images/
├── media/
└── components/
```

## Observações

- O arquivo `.env` não deve ser enviado ao Git.
- Em produção, use `DEBUG=False`.
- Atualize `ALLOWED_HOSTS` e `CSRF_TRUSTED_ORIGINS` com o domínio real.
- O banco local usa SQLite; para produção com dados persistentes, considere PostgreSQL.
