package faljseBlog;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;
import java.nio.file.Files;
import java.nio.file.Paths;


public class Tools {
    public static void serialize(Object o, File file)
    {
        ObjectMapper mapper = new ObjectMapper();

        try {
            mapper.writeValue(file, o);
            String jsonInString = mapper.writeValueAsString(o);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static java.nio.file.Path getImageDir(String blogDir, int id)
    {
        java.nio.file.Path path = Paths.get(blogDir,
                String.valueOf(id),
                "images");
        try {
            if(Files.notExists(path))
                Files.createDirectory(path);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return path;
    }

    public static String sanitizeFileName(String name)
    {
        StringBuilder filename = new StringBuilder();
        for (char c : name.toCharArray()) {
            if (c=='.' || Character.isJavaIdentifierPart(c)) {
                filename.append(c);
            }
        }
        return filename.toString();
    }

    public static <T> T load(File jsonFile, Class c)
    {
        ObjectMapper mapper = new ObjectMapper();
        T o = null;
        try {
            o = (T) mapper.readValue(jsonFile, c);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return o;
    }
}
