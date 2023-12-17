<?php

namespace App\Controller;

use App\Entity\Actu;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Util\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    #[Route('/', name: 'acceuil')]
    public function index(): Response
    {
        return $this->render('pages/index.html.twig');
    }

    #[Route('/contact', name: 'app_contact')]
    public function contact(): Response
    {
        return $this->render('pages/contact.html.twig');
    }

    #[Route('/login', name: 'app_login')]
    public function login(): Response
    {
        return $this->render('pages/login.html.twig');
    }

    #[Route('/params', name: 'app_params')]
    public function params(EntityManagerInterface $em): JsonResponse
    {
        $events = $em->getRepository(Actu::class)->findAll();
        $availablesMonths = [];
        $availablesYears = [];
        if ($events && !empty($events)) {
            foreach ($events as $event) {
                array_push($availablesMonths, $event->getPublishAt()->format('m'));
                array_push($availablesYears, $event->getPublishAt()->format('Y'));
            }

            // Assurez-vous que les tableaux contiennent uniquement des éléments uniques
            $availablesMonths = array_unique($availablesMonths);
            $availablesYears = array_unique($availablesYears);
        }

        return $this->json([
            'availablesMonths' => $availablesMonths,
            'availablesYears' => $availablesYears,
        ]);
    }
}
