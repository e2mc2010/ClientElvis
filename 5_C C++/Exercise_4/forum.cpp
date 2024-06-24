# include <iostream>

using namespace std;

// base class

  class vehicle {

    public:

  virtual  void  vehicletype ()

    {

       cout<<"I am a vehicle"<<endl;

    }

};

 // derived class

class car: public vehicle

{

public:

 void vehicletype()

 {

  cout<<"I am a car"<<endl;

  }

    };

// derived class

    class bus: public vehicle{

    public:

    void vehicletype()

    {

 cout<<"I am a bus"<<endl;

    }

    };

    // derived class

 class bike: public vehicle

    {

public:

void vehicletype()

    {

       cout<<"I am a bike"<<endl;

    }

   }; 

 int main()

 {

 vehicle *v1=new car();

 //v1->vehicletype();

 vehicle *v2=new bus();

// v2->vehicletype();

 

vehicle *v3=new bike();

 //v3->vehicletype();

 //runtime polymorphism

 int i;

 vehicle*vehicles[3]={v1,v2,v3};

 for (i=0; i<3; i++)

 {

vehicles[i]->vehicletype();

 return 0;

 }