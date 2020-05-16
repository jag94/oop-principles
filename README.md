# oop-principles

[![Build Status](https://travis-ci.com/jag94/oop-principles.svg?branch=master)](https://travis-ci.com/jag94/oop-principles)
[![Coverage Status](https://coveralls.io/repos/github/jag94/oop-principles/badge.svg?branch=master)](https://coveralls.io/github/jag94/oop-principles?branch=master)

There are four main principles of object-oriented programming that JavaScript implements in a variety of ways. These methods are known as encapsulation, inheritance, abstraction and polymorphism.

Encapsulation is displayed when objects do not allow other objects to directly alter their states. The main object allows others access to public methods that can change the original object's state indirectly. The public methods define how other objects are allowed to interact with the main object but only the main object is typically allowed to change its own state. Anything set privately within the object's class are marker by the "#" symbol before the variable and are inaccessible to other classes and objects.

Abstraction allows objects to only show other objects the parts that they need to interact with and nothing else. Objects do not necessarily need to know how other objects complete a task, they just need a means of using whatever method they are attempting to use.

Inheritance gives a class the ability to use the methods and fields of another. The initial class is known as the child class while the class it is borrowing from is known as the parent class. Parent classes can have any amount of child classes as a lot of JavaScript classes are similar. Child classes are also allowed to use their own methods that are not inherited from a parent. Both public and private methods are inherited by child classes, though not all have to be used.

In the case of Polymorphism, this allows for child classes to use the same method across classes without JavaScript becoming confused. By reusing a common interface, child classes redefine the same methods to apply to themselves so a general method can be called on a group of different child classes and still work on all of them.
