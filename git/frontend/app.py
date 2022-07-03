from operator import index
import web
render= web.template.render("templates")
urls = (
    '/', 'index',
    '/get_clietes', 'get_clietes',
)
app = web.application(urls, globals())

class index:
    def GET(self):
        return render.index()

class get_clietes:
    def GET(self):
        return render.get_clietes()

           
if __name__ == "__main__":
    app.run()