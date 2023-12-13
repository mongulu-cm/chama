<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ActuController extends AbstractController
{
    #[Route('/presentation', name: 'app_presentation')]
    public function presentation(): Response
    {
        return $this->render('actu/presentation.html.twig');
    }

    
    #[Route('/allEvents', name: 'app_all_events')]
    public function allEvents(): Response
    {
        return $this->render('pages/allEvents.html.twig');
    }

    #[Route('/actu/liste/{mois}', name: 'app_liste_actu')]
    public function listeActu(int $mois, EntityManagerInterface $em): Response
    {
        $actu = $em->getRepository('App:Actu')->findByMonth($mois);
        return $this->render('actu/fiche_actu.html.twig', [
            'actu' => $actu,
        ]);
    }

    #[Route('/projets', name: 'app_projets')]
    public function projets(): Response
    {
        return $this->render('actu/projets.html.twig');
    }

    #[Route('/actu/{annee}', name: 'app_actu')]
    public function actu(int $annee, EntityManagerInterface $em): Response
    {
        $actu = $em->getRepository('App:Actu')->findByYear($annee);
        return $this->render('actu/fiche_actu.html.twig', [
            'actu' => $actu,
        ]);
    }
}
