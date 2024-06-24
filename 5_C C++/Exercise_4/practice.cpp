#include <iostream>
using namespace std;

class Vehicle {
public:
    virtual void describe() {
        cout << "This is a generic vehicle." << endl;
    }

    void showType() {
        cout << "Vehicle type: Generic" << endl;
    }
};

class Car : public Vehicle {
public:
    void describe() override {
        cout << "This is a car." << endl;
    }

    void showType() {
        cout << "Vehicle type: Car" << endl;
    }
};

int main() {
    Car carInstance;
    Vehicle* vehiclePointer = &carInstance;

       vehiclePointer->describe();  

        vehiclePointer->showType();  

    return 0;
}