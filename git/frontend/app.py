from operator import index
import web

urls = (
    '/', 'index',
    "/get_clientes/(.*)", "get_clientes",
    #"/clietes/get/(.*)", "GetClientes",
    #"/clietes/post/(.*)", "PostClientes",
    #"/clietes/put/(.*)", "PutClientes",
    #"/clietes/delete/(.*)", "DeleteClientes",
    '/validate/', 'Validate',
)
app = web.application(urls, globals())
render = web.template.render("templates/")

class index:
    def GET(self):
        return render.index()

class getclientes:
    def GET(self):
        return render.get_clientes()

           
if __name__ == "__main__":
    app.run()