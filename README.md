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

## Estrutura

```text
portfolio/
├── manage.py
├── requirements.txt
├── .env.example
├── .gitignore
├── Procfile
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
