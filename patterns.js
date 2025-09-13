const patterns = [
  {
    id: "singleton",
    title: "Singleton",
    code: {
      csharp: `/* C# Singleton */
public class Singleton {
    private static Singleton instance;
    private Singleton() { }
    public static Singleton Instance {
        get {
            if(instance == null) instance = new Singleton();
            return instance;
        }
    }
}`,
      python: `# Python Singleton
class Singleton:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance`,
      cpp: `// C++ Singleton
class Singleton {
private:
    static Singleton* instance;
    Singleton() {}
public:
    static Singleton* getInstance() {
        if(!instance)
            instance = new Singleton();
        return instance;
    }
};`
    },
    description: `<p><strong>Descripción:</strong> Patrón creacional que asegura que una clase tenga una única instancia en toda la aplicación y proporciona un punto de acceso global.<br>
    <strong>Cuándo usarlo:</strong> Útil para objetos únicos como configuración, conexión a base de datos o control de recursos compartidos.</p>`
  },
  {
    id: "factory",
    title: "Factory Method",
    code: {
      csharp: `// C# Factory Method
public abstract class Creator {
    public abstract Product FactoryMethod();
}`,
      python: `# Python Factory Method
from abc import ABC, abstractmethod

class Creator(ABC):
    @abstractmethod
    def factory_method(self):
        pass`,
      cpp: `// C++ Factory Method
class Creator {
public:
    virtual Product* factoryMethod() = 0;
    virtual ~Creator() {}
};`
    },
    description: `<p><strong>Descripción:</strong> Patrón creacional que define una interfaz para crear un objeto, pero deja que las subclases decidan qué clase instanciar.<br>
    <strong>Cuándo usarlo:</strong> Cuando el código necesita delegar la creación de objetos a subclases para mantener flexibilidad y desacoplamiento.</p>`
  },
  {
    id: "observer",
    title: "Observer",
    code: {
      csharp: `// C# Observer
public interface IObserver { void Update(); }
public class Subject {
    private List<IObserver> observers = new List<IObserver>();
    public void Attach(IObserver o) => observers.Add(o);
    public void Notify() { foreach(var o in observers) o.Update(); }
}`,
      python: `# Python Observer
class Subject:
    def __init__(self):
        self._observers = []
    def attach(self, observer):
        self._observers.append(observer)
    def notify(self):
        for observer in self._observers:
            observer.update()`,
      cpp: `// C++ Observer
#include <vector>

class IObserver {
public:
    virtual void update() = 0;
};

class Subject {
    std::vector<IObserver*> observers;
public:
    void attach(IObserver* o) { observers.push_back(o); }
    void notify() { for(auto o : observers) o->update(); }
};`
    },
    description: `<p><strong>Descripción:</strong> Patrón comportamental que define una relación uno-a-muchos entre objetos, de manera que cuando uno cambia de estado, todos sus dependientes son notificados automáticamente.<br>
    <strong>Cuándo usarlo:</strong> Útil en interfaces gráficas, sistemas de eventos o cualquier escenario donde múltiples componentes necesiten reaccionar ante cambios de un objeto central.</p>`
  }
];
