from operator import index
import web

urls = (
    '/', 'index',
    "/clietes/get/(.*)", "Clientes",
    "/clietes/get/(.*)", "GetClientes",
    "/clietes/post/(.*)", "PostClientes",
    "/clietes/put/(.*)", "PutClientes",
    "/clietes/delete/(.*)", "DeleteClientes",
    '/validate/', 'Validate',
)
app = web.application(urls, globals())
render = web.template.render("templates/")

class index:
    def GET(self):
        return render.index()

class Validate:
    def GET(self):
        return render.validate()

           
if __name__ == "__main__":
    app.run()