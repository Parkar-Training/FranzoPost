from AllImports import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user.twoFAserialization import *
from user.user_serialization import user_Serialization_Class


class TwoFA(APIView):
    def get(self, request):
        print("Data about 2FA")
        filter = users_new.objects.all().filter(**{"twoFA":"False"})
        print("data in filter", filter)
        print("\n filter type: ", type(filter))
        print("\n filter print type", type(filter[0]))
        serializer = user_Serialization_Class(filter, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def get_user(self, userId):
        print("Get data of user")
        try:
            model = users_new.objects.get(userId=userId)
            print("Inside tryyy!!!!!!!!!!!", model, "type ", type(model))
            print("data of the user", model)
            return model
        except users_new.DoesNotExist:
            print("Get user id", userId)
            return Response(f'User with user id {userId} is not found in Database', status=status.HTTP_404_NOT_FOUND)

        print("\n inside userDDDD\n")

    def put(self, request):
        print("Inside put 2fa------")
        print("req data-__---->", request.data)
        #print("Self get user id", self.get_user(userId))
        checkQs= users_new.objects.all().filter(**request.data)
        if (checkQs.exists()):
            return Response("Already...", status=status.HTTP_400_BAD_REQUEST)
        getUserId={}
        getUserId['userId']= request.data['userId']
        checkQs= users_new.objects.all().filter(**getUserId)
        if (checkQs.exists()):
            print("check qs 2", checkQs)
            sample = list(checkQs.values_list()[0])
            print("type------>", type(sample), "---- value", sample)

            serializer= makeTwoFASerializerClass(users_new.objects.get(userId=sample[0]), data=request.data)
            if serializer.is_valid():
                print("serial data ", serializer.validated_data)
                serializer.save()
                serializer.validated_data['userId']= sample[0]
                serializer.validated_data['timestamp']= datetime.now()
                return Response(serializer.validated_data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response("user doesnot exists", status=status.HTTP_404_NOT_FOUND)

        #serializer = makeTwoFASerializerClass(data=self.get_user(userId))

        #print("req data", request.data)


        print("req data type:", type(request.data))
'''
        if serializer.is_valid():
            serializer.save()

            print("serializer value", serializer.data)
            print("serializer value type: ", type(serializer.data))
            return Response("Changed Successfully!!!", status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
'''
