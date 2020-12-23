<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\DeleteCommentRequest;
use App\SocialMob as GrowthSession;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(Request $request, GrowthSession $socialMob)
    {
        return $socialMob->comments()->orderByDesc('created_at')->get();
    }

    public function store(Request $request, GrowthSession $socialMob)
    {
        $comment = new Comment($request->all());
        $comment->user()->associate($request->user());
        $comment->socialMob()->associate($socialMob);
        $comment->save();
        return $socialMob->fresh();
    }

    public function destroy(DeleteCommentRequest $request, GrowthSession $socialMob,Comment $comment)
    {
        $comment->delete();

        return $socialMob->fresh();
    }
}
