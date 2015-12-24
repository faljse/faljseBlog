package faljseBlog;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;


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
