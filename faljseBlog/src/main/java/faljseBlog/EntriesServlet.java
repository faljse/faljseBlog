package faljseBlog;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
/**
 * Created by Martin on 26.12.2015.
 */
public class EntriesServlet extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter pw=resp.getWriter();
        String basePath = FaljseBlogApplication.getConfig().getBasePath();
        String hostName = FaljseBlogApplication.getConfig().getHostName();

        if(req.getScheme().equals("http")) {
            resp.sendRedirect(hostName+basePath+"api/pub/list");
        }
        else
            resp.sendRedirect(hostName+basePath+"api/pub/list");
        pw.close();
    }
}
