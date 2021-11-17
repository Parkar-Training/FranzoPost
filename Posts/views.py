from django.shortcuts import render

# Create your views here.


from Posts.models import Post
from Posts.postSerialization import post_Class


def getAllPost(request):
    print("inside get function")
    model = Post.objects.all()
    print("get start function\n models--->", model, "type of model---->", type(model))
    #getdata = request.POST.get('getdata', 'None')
    #print("getdata--->", getdata, "type of getdata", type(getdata))
    # serializer = serializerClass(model,many=True)
    serializer = post_Class(model, many=True)
    print("Serializer--->", serializer.data)
    return serializer.data

def Like(request):

    return